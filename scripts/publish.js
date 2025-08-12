import { execSync } from 'child_process';

const token = process.env.JSR_TOKEN;

if (!token) {
  console.error('Error: Missing JSR_TOKEN environment variable');
  process.exit(1);
}

execSync(`npx jsr publish --token ${token}`, { stdio: 'inherit' });
