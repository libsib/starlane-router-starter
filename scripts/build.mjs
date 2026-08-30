import { build } from "esbuild"
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const outDir = path.join(projectRoot, "build")

rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

await build({
  entryPoints: [path.join(projectRoot, "router.js")],
  bundle: true,
  format: "esm",
  outfile: path.join(outDir, "router.js"),
})

const htmlFiles = readdirSync(projectRoot).filter((file) => file.endsWith(".html"))
for (const file of htmlFiles) {
  writeFileSync(path.join(outDir, file), readFileSync(path.join(projectRoot, file)))
}

console.log("Built -> build/")
