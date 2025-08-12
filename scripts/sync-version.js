import fs from 'fs';
import path from 'path';

const folder = path.join(process.cwd(), 'packages');

(() => {
  fs.readdirSync(folder).forEach((n) => {
    const filePath = path.join(folder, n);

    if (!fs.statSync(filePath).isDirectory()) return;

    const pkgPath = path.join(filePath, 'package.json');
    const jsrPath = path.join(filePath, 'jsr.json');

    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const jsr = JSON.parse(fs.readFileSync(jsrPath, 'utf8'));

    if (!pkg.private && pkg.version) {
      const oldVer = jsr.version;
      jsr.version = pkg.version;
      fs.writeFileSync(jsrPath, JSON.stringify(jsr, null, 2));
      console.log(
        `Updated ${path.relative(folder, jsrPath).replace('\\', '/')} from version ${oldVer} to ${pkg.version}`,
      );
    }
  });
})();
