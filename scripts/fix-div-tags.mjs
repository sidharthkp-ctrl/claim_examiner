import fs from 'fs'
import path from 'path'

const root = path.join(process.cwd(), 'packages', 'claims-ui', 'src')
const close = '</' + 'div>'

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    if (fs.statSync(p).isDirectory()) walk(p)
    else if (p.endsWith('.ts')) {
      const text = fs.readFileSync(p, 'utf8')
      const updated = text.split('<motion').join('<div').split('</motion>').join(close)
      if (updated !== text) fs.writeFileSync(p, updated)
    }
  }
}

walk(root)
console.log('fixed')
