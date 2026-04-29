import codecs

with codecs.open('src/app/page.module.css', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

# Line 1908 in 1-based is index 1907. Let's keep up to index 1907.
# So lines[:1907] keeps the first 1907 lines.
# But wait, earlier the total lines were 1907.
valid_lines = lines[:1907]

with codecs.open('src/app/page.module.css', 'w', encoding='utf-8') as f:
    f.writelines(valid_lines)

print("Truncated file up to line 1907.")
