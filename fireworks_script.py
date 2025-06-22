import bpy
import random

# シーンを設定
def setup_scene():
    bpy.ops.object.select_all(action='DESELECT')
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()

# 花火エフェクトを作成
def create_fireworks(location):
    bpy.ops.object.add(type='MESH')
    obj = bpy.context.object
    obj.location = location
    # パーティクルシステムを追加する
    bpy.ops.object.modifier_add(type='PARTICLE_SYSTEM')
    psys = obj.particle_systems.active
    psys.settings.emit_from = 'VOLUME'
    psys.settings.count = random.randint(30, 50)
    psys.settings.lifetime = random.randint(20, 50)
    psys.settings.physics_type = 'NEWTON'
    # カラー設定
    mat = bpy.data.materials.new(name="FireworkMaterial")
    mat.diffuse_color = (random.random(), random.random(), random.random(), 1)
    obj.data.materials.append(mat)

setup_scene()
create_fireworks(location=(0, 0, 0))  # 場所を指定
