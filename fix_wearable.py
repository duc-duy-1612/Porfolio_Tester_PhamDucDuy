with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import update_wearable
new_object_start = update_wearable.new_object_start

start_str = 'slug: "wearable-health-data-integration"'
start_idx = content.find(start_str)
start_idx = content.rfind('  {', 0, start_idx)

end_str = 'slug: "homecare-workflow-mapping"'
end_idx = content.find(end_str, start_idx)
end_idx = content.rfind('  {', start_idx, end_idx)
end_idx = content.rfind(',', start_idx, end_idx) + 1

new_content = content[:start_idx] + new_object_start + ",\n" + content[end_idx:]

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Fixed wearable")
