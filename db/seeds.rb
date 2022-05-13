# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


puts 'Creating Comedians...'
c1 = Comedian.create(name: 'Tom Segura', about_info: 'Tom Segura is a comedian originally from Cincinnati, Ohio. Well known for his Netflix specials Ball Hog, Disgraceful, Completely Normal, and Mostly Stories, Segura has also made feature film appearances that include Instant Family, Countdown, Flinch, and The Opening Act, among others. Tom is one of the top-selling touring acts in the world, having sold hundreds of thousands of tickets on multiple international tours. Additionally, he co-hosts two of the most popular comedy podcasts, “Your Mom’s House,” with his wife, comedian Christina P. and “Two Bears, One Cave” with fellow comedian Bert Kreischer. Segura also produces multiple podcasts under his YMH Studios brand.', website_url: 'https://www.tomsegura.com', image_url: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/t3klhb9t5o9caadme6oi/tom-segura-credit-netflix')
c2 = Comedian.create(name: 'Andrew Schulz', about_info: 'Schulz began performing stand-up during college, and continued when he returned to New York from California in the mid 2000s. He became a regular at the Comedy Village and went on to make his debut at the Edinburgh Comedy Festival in Edinburgh, Scotland, in 2008.

In September 2017, Schulz self-released his first comedy special, 4:4:1 on YouTube. In June 2018, Schulz followed up with his debut comedy album, 5:5:1. After only one day of release, it earned the top ranking on iTunes comedy album charts; within its first week, the album ranked number-one on Apple Music, Google Play, and Amazon; and, for the week of June 23, 2018, the album was number one on the Billboard comedy album charts. In 2021, Schulz issued a pair of streaming EPs, Views from the Cis and Brilliant Idiot, through 800 Pound Gorilla Records.', website_url: 'https://theandrewschulz.com', image_url: 'https://theimprovorlando.com/ComicImage/866e4def-e0ba-4722-b140-f1b2b8ab8940/6554b4ad-0637-43e0-993a-ab31b462e376/funnyimprov/300/440/Y/N')
c3 = Comedian.create(name: 'Bill Burr', about_info: 'Bill Burr is an American comedian or a comedian from the North American Union, depending on when you read this. He grew up outside of Boston, Massachusetts and did fairly poorly in school, despite the fact that he applied himself.
Having first gained notoriety for his recurring role on the second season of Chappelle’s Show, Bill developed a comedic style of uninformed logic that has made him a regular with Conan O’Brien, Jimmy Fallon and Jimmy Kimmel.
One of the most popular comedy podcasts on the web, Bill’s Monday Morning Podcast, is an off-the-cuff, twice-weekly rant that has become a fan favorite. Bill began the podcast in May of 2007.
Bill is against organized religion and believes we should go back to the gold standard for our currency. None of his opinions are based on any sort of reliable information. He tends to go with his first thought, because reading makes him sleepy.', website_url: 'https://billburr.com', image_url: 'https://billburr.com/wp-content/uploads/2019/10/bill-hero-1.jpg')

puts 'Creating Locations...'
l1 = Location.create(name: 'Madison Square Garden', city: 'New York', state: 'NY', number_of_seats: 20789, website_url: 'https://www.msg.com', image_url: 'https://img.msg.com/wp-content/uploads/2021/02/BillyJoel_071818_1902_RT-1.jpg')
l2 = Location.create(name: 'Radio City Music Hall', city: 'New York', state: 'NY', number_of_seats: 6015, website_url: 'https://www.msg.com/radio-city-music-hall', image_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/a2/48/86/radio-city-music-hall.jpg?w=1200&h=-1&s=1')
l3 = Location.create(name: 'Kings Theatre', city: 'Brooklyn', state: 'NY', number_of_seats: 3000, website_url: 'https://www.kingstheatre.com/', image_url: 'https://img.bizbash.com/files/base/bizbash/bzb/image/2019/02/house_stage_from_mezz.png?ar=16%3A9&auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=639&q=70&w=1136')
l4 = Location.create(name: 'Beacon Theatre', city: 'New York', state: 'NY', number_of_seats: 2894, website_url: 'https://www.msg.com/beacon-theatre', image_url: 'https://weylin.com/wp-content/uploads/2018/02/Venue-Beacon-Theatre.jpg')
l5 = Location.create(name: 'PNC Bank Arts Center', city: 'Holmdel', state: 'NJ', number_of_seats: 17500, website_url: 'https://www.livenation.com/venue/KovZpZAEAIIA/pnc-bank-arts-center-events', image_url: 'https://blog.ticketmaster.com/wp-content/uploads/pnc-bank-fb-1024x683.jpg')

puts 'Creating Shows...'
10.times do
    Show.create(date_time: Faker::Date.between(from: '2021-06-01', to: '2021-10-31'), price: rand(6..15)*10, comedian_id: rand(1..Comedian.count), location_id: rand(1..Location.count)) 
end

puts 'Creating Users...'
User.create(first_name: 'Admin', last_name: '', username: 'admin', password: 'pass', admin: true)

puts 'Done Seeding!'