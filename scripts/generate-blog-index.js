const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDir = path.join(__dirname, "../public/blog/posts");
const outputFile = path.join(__dirname, "../public/blog/index.json");

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

const posts = files
  .map((filename) => {
    const filePath = path.join(postsDir, filename);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);
    const slug = filename.replace(".md", "");
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      tags: data.tags || [],
      description: data.description || "",
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log(`Generated blog index with ${posts.length} post(s)`);
