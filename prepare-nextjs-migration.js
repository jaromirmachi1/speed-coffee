#!/usr/bin/env node

/**
 * Helper script to prepare codebase for Next.js migration
 * This script:
 * 1. Identifies files that need "use client"
 * 2. Shows import paths that need updating
 * 3. Creates a checklist of changes needed
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, 'src');
const CLIENT_COMPONENT_INDICATORS = [
  'useState',
  'useEffect',
  'useRef',
  'useContext',
  'useCallback',
  'useMemo',
  'framer-motion',
  'gsap',
  'window.',
  'document.',
  'addEventListener',
  'onClick',
  'onChange',
  'onSubmit',
];

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function needsClientDirective(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has "use client"
  if (content.includes('"use client"') || content.includes("'use client'")) {
    return false;
  }
  
  // Check for client-side indicators
  return CLIENT_COMPONENT_INDICATORS.some(indicator => 
    content.includes(indicator)
  );
}

function getRelativeImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const imports = [];
  const importRegex = /import\s+.*?\s+from\s+['"](\.\.?\/[^'"]+)['"]/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  
  return imports;
}

console.log('🔍 Analyzing codebase for Next.js migration...\n');

const files = findFiles(SRC_DIR);
const clientComponents = [];
const relativeImports = new Set();

files.forEach(file => {
  if (needsClientDirective(file)) {
    const relativePath = path.relative(SRC_DIR, file);
    clientComponents.push(relativePath);
  }
  
  const imports = getRelativeImports(file);
  imports.forEach(imp => {
    if (imp.startsWith('../') || imp.startsWith('./')) {
      relativeImports.add(imp);
    }
  });
});

console.log('📋 MIGRATION CHECKLIST\n');
console.log('='.repeat(60));

console.log('\n1️⃣ Files that need "use client" directive:');
console.log('-'.repeat(60));
if (clientComponents.length === 0) {
  console.log('✅ No files need "use client" (or already have it)');
} else {
  clientComponents.forEach(file => {
    console.log(`   • src/${file}`);
  });
}

console.log('\n2️⃣ Relative imports that should use @/ alias:');
console.log('-'.repeat(60));
if (relativeImports.size === 0) {
  console.log('✅ No relative imports found');
} else {
  Array.from(relativeImports).slice(0, 20).forEach(imp => {
    console.log(`   • ${imp}`);
  });
  if (relativeImports.size > 20) {
    console.log(`   ... and ${relativeImports.size - 20} more`);
  }
}

console.log('\n3️⃣ Next Steps:');
console.log('-'.repeat(60));
console.log('   1. Install Next.js: npm install next@latest react@latest react-dom@latest');
console.log('   2. Create src/app/ directory');
console.log('   3. Create src/app/layout.tsx (see MIGRATION_EXAMPLES.md)');
console.log('   4. Create src/app/page.tsx (see MIGRATION_EXAMPLES.md)');
console.log('   5. Move src/index.css → src/app/globals.css');
console.log('   6. Add "use client" to files listed above');
console.log('   7. Update imports to use @/ alias');
console.log('   8. Create next.config.js');
console.log('   9. Update tsconfig.json with paths');
console.log('   10. Update package.json scripts');

console.log('\n✅ Analysis complete!\n');
