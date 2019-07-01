# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_21_074637) do

  create_table "category_masters", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "category_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dictionaries", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "word", null: false
    t.string "pronunciation"
    t.string "class_name"
    t.decimal "class_prob", precision: 2, scale: 1
    t.decimal "cost", precision: 2, scale: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dictionaries_tmps", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "ref_id"
    t.string "word"
    t.string "pronunciation"
    t.string "class_name"
    t.decimal "class_prob", precision: 2, scale: 1
    t.decimal "cost", precision: 2, scale: 1
    t.integer "version_id"
    t.datetime "version_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "entity_name_tmps", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "ref_id"
    t.string "entities_name"
    t.integer "version_id"
    t.datetime "version_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "entity_names", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "entities_name", null: false
    t.string "child_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "entity_value_tmps", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "keyword"
    t.string "tag"
    t.string "synonym"
    t.integer "entity_id"
    t.integer "ref_id"
    t.integer "version_id"
    t.datetime "version_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "entity_values", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "keyword"
    t.string "tag"
    t.string "synonym", limit: 500
    t.integer "entity_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exports", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "version_name"
    t.string "remark"
    t.string "version_type", limit: 3
    t.integer "status", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "intentions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "intention_name", limit: 150
    t.bigint "intention_code"
    t.string "description"
    t.string "datasource", limit: 8
    t.string "created_by", limit: 150
    t.datetime "created_date", comment: "username who created this data"
    t.string "updated_by", limit: 150
    t.datetime "updated_date", comment: "username who updated this data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "intention_tag"
  end

  create_table "permissions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "controller_name"
    t.string "action_name"
    t.string "category"
    t.string "module_name"
    t.string "component"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "permissions_roles", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "role_id"
    t.integer "permission_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "role_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "login"
    t.string "display_name"
    t.string "password"
    t.string "role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
