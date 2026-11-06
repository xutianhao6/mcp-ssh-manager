import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { nativeLanguage, nativeText } from '../desktop/electron/locale.mjs';
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'ssh-locale-'));
try {
  assert.equal(nativeLanguage(home), 'zh-CN');
  fs.writeFileSync(path.join(home, 'preferences.json'), JSON.stringify({ 'ssh-manager.language': 'en' }));
  assert.equal(nativeLanguage(home), 'en');
  fs.writeFileSync(path.join(home, 'preferences.json'), '{invalid');
  assert.equal(nativeLanguage(home), 'zh-CN');
  assert.equal(nativeText('File', {}, 'zh-CN'), '文件');
  assert.equal(nativeText('File', {}, 'en'), 'File');
  assert.equal(nativeText('Servers ({{v0}})', { v0: 3 }, 'zh-CN'), '服务器（3）');
  for (const namespace of ['messages.', '']) {
    const en = JSON.parse(fs.readFileSync(new URL('../ui/src/locales/' + namespace + 'en.json', import.meta.url)));
    const zh = JSON.parse(fs.readFileSync(new URL('../ui/src/locales/' + namespace + 'zh-CN.json', import.meta.url)));
    const flatten = (o, prefix = '') => Object.entries(o).flatMap(([k, v]) => typeof v === 'object' ? flatten(v, prefix + k + '.') : [[prefix + k, v]]);
    const left = Object.fromEntries(flatten(en)), right = Object.fromEntries(flatten(zh));
    assert.deepEqual(Object.keys(left).sort(), Object.keys(right).sort());
    for (const key of Object.keys(left)) {
      assert.ok(right[key].trim(), key);
      assert.deepEqual(left[key].match(/\{\{\w+\}\}/g)?.sort(), right[key].match(/\{\{\w+\}\}/g)?.sort(), key);
    }
  }
} finally { fs.rmSync(home, { recursive: true, force: true }); }
console.log('Language catalog, interpolation and native persistence checks passed.');
