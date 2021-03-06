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

ActiveRecord::Schema.define(version: 20190111000245) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "birds", force: :cascade do |t|
    t.string "common_name"
    t.string "scientific_name"
    t.string "image"
    t.string "song"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "family"
    t.string "url"
    t.integer "correct_answers"
    t.integer "incorrect_answers"
  end

  create_table "birds_regions", force: :cascade do |t|
    t.integer "bird_id"
    t.integer "region_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bird_id"], name: "index_birds_regions_on_bird_id"
    t.index ["region_id"], name: "index_birds_regions_on_region_id"
  end

  create_table "birds_users", force: :cascade do |t|
    t.integer "user_id"
    t.integer "bird_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "regions", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stats", force: :cascade do |t|
    t.integer "user_id"
    t.integer "bird_id"
    t.boolean "correct"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stats_regions", force: :cascade do |t|
    t.integer "stat_id"
    t.integer "region_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url_small"
    t.integer "correct_answers"
    t.integer "incorrect_answers"
  end

end
