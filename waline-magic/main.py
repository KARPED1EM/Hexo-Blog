import os
import json

# 获取当前目录
current_dir = os.getcwd()

# 用于存储文件名的列表
png_files = []

# 遍历当前目录下的所有文件
for filename in os.listdir(current_dir):
    # 检查文件是否是PNG格式
    if filename.lower().endswith('.webp'):
        # 去掉.png后缀
        name = os.path.splitext(filename)[0]
        png_files.append(name)

# 按字母顺序排序文件名
png_files.sort()

# 创建包含"items"键的字典
result = {"items": png_files}

# 将结果转换为JSON格式的字符串
json_result = json.dumps(result, ensure_ascii=False, indent=2)

# 打印结果
print(json_result)

# 将结果保存到文件
with open('png_files_list.json', 'w', encoding='utf-8') as f:
    f.write(json_result)

print("结果已保存到 png_files_list.json 文件中")

