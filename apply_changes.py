import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def get_var(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        src = f.read()
    return src.split('new_object_start = """')[1].split('"""')[0]

try:
    wearable = get_var('update_wearable.py')
    homecare = get_var('update_homecare.py')
    clinical = get_var('update_clinical.py')
except Exception as e:
    print("Error reading variables:", e)

# 1. Wearable
start_str = 'slug: "wearable-health-data-integration"'
start_idx = content.find(start_str)
start_idx = content.rfind('  {', 0, start_idx)
end_str = 'slug: "homecare-workflow-mapping"'
end_idx = content.find(end_str, start_idx)
end_idx = content.rfind('  {', start_idx, end_idx)
end_idx = content.rfind(',', start_idx, end_idx) + 1
content = content[:start_idx] + wearable + ",\n" + content[end_idx:]

# 2. Homecare
start_str = 'slug: "homecare-workflow-mapping"'
start_idx = content.find(start_str)
start_idx = content.rfind('  {', 0, start_idx)
end_str = 'slug: "clinical-feature-catalogue"'
end_idx = content.find(end_str, start_idx)
end_idx = content.rfind('  {', start_idx, end_idx)
end_idx = content.rfind(',', start_idx, end_idx) + 1
content = content[:start_idx] + homecare + ",\n" + content[end_idx:]

# 3. Clinical
start_str = 'slug: "clinical-feature-catalogue"'
start_idx = content.find(start_str)
start_idx = content.rfind('  {', 0, start_idx)
end_str = 'slug: "online-food-delivery-system"'
end_idx = content.find(end_str, start_idx)
end_idx = content.rfind('  {', start_idx, end_idx)
end_idx = content.rfind(',', start_idx, end_idx) + 1
content = content[:start_idx] + clinical + ",\n" + content[end_idx:]

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied wearable, homecare, and clinical updates successfully.")
