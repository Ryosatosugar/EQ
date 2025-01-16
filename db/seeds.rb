# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(email: "ryo032897@gmail.com",
            password: "123456",
            password_confirmation: "123456",
            name: "佐藤",
            admin: true).skip_confirmation!

User.create!(email: "comoly_t.kenmochi@metaanchor.com",
            password: "123456",
            password_confirmation: "123456",
            name: "釼持",
            admin: true).skip_confirmation!
