# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


puts 'Creating Comedians...'
c1 = Comedian.create(name: 'Tom Segura', about_info: 'Tom is a comedian.', website_url: 'https://www.tomsegura.com', image_url: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/t3klhb9t5o9caadme6oi/tom-segura-credit-netflix')
c2 = Comedian.create(name: 'Andrew Schulz', about_info: 'Andrew is a comedian.', website_url: 'https://theandrewschulz.com', image_url: 'https://theimprovorlando.com/ComicImage/866e4def-e0ba-4722-b140-f1b2b8ab8940/6554b4ad-0637-43e0-993a-ab31b462e376/funnyimprov/300/440/Y/N')
c3 = Comedian.create(name: 'Bill Burr', about_info: 'Bill is a comedian.', website_url: 'https://billburr.com', image_url: 'https://billburr.com/wp-content/uploads/2019/10/bill-hero-1.jpg')

puts 'Creating Locations...'
l1 = Location.create(name: 'Madison Square Garden', city: 'New York', state: 'NY', number_of_seats: 20789, website_url: 'https://www.msg.com', image_url: 'https://img.msg.com/wp-content/uploads/2021/02/BillyJoel_071818_1902_RT-1.jpg')
l2 = Location.create(name: 'Radio City Music Hall', city: 'New York', state: 'NY', number_of_seats: 6015, website_url: 'https://www.msg.com/radio-city-music-hall', image_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/a2/48/86/radio-city-music-hall.jpg?w=1200&h=-1&s=1')
l3 = Location.create(name: 'Kings Theatre', city: 'Brooklyn', state: 'NY', number_of_seats: 3000, website_url: 'https://www.kingstheatre.com/', image_url: 'https://img.bizbash.com/files/base/bizbash/bzb/image/2019/02/house_stage_from_mezz.png?ar=16%3A9&auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=639&q=70&w=1136')
l4 = Location.create(name: 'Beacon Theatre', city: 'New York', state: 'NY', number_of_seats: 2894, website_url: 'https://www.msg.com/beacon-theatre', image_url: 'https://weylin.com/wp-content/uploads/2018/02/Venue-Beacon-Theatre.jpg')
l5 = Location.create(name: 'PNC Bank Arts Center', city: 'Holmdel', state: 'NJ', number_of_seats: 17500, website_url: 'https://www.livenation.com/venue/KovZpZAEAIIA/pnc-bank-arts-center-events', image_url: 'https://blog.ticketmaster.com/wp-content/uploads/pnc-bank-fb-1024x683.jpg')

puts 'Creating Shows...'
10.times do
    Show.create(date_time: Faker::Date.between(from: '2022-06-01', to: '2021-10-31'), price: rand(6..15)*10, comedian_id: rand(1..Comedian.count), location_id: rand(1..Location.count)) 
end

puts 'Creating Users...'
User.create(first_name: 'Admin', last_name: '', username: 'admin', password: 'pass', admin: true)

puts 'Done Seeding!'