# ID-Asg2-Lim-Yu-Bai-S10223127E
# ID-Asg2-Tang-Yong-Qi-S10221789


1. Project's Name:

We made an e-commerce website called Shopeefy. Our store is an online clothing store that displays all the clothing products sold on our site, 
allowing customers to perform various functions such as sign up for an account with us and log in using that account, add/remove items to their 
cart, and send us feedback via an online form. We meticulously organized the site to make it responsive and have a straightfoward, neat and clean
layout. Customers browsing the site and can conveniently browse the site and utilize the features we have without any confusion as we ensured
the site is easy to navigate.

We utilized RestDB API and allowed for fully functioning login/signup system and a working form submission system. So for example:
If the customer wants to contact us, they can access the contact section of the site and submit the form already prepared for them.
Or if the customer wants to sign up for an online account with us, they can do so in the login/signup page and login using the 
account they made.



2. Features:

- Navigation Bar (In every page)
In every page users can find a navigation bar for users to select which page to browse through at any given instance


- Footer Bar (In every page)
In every page users can find a footer bar to improve the overall user usability and convenience


- Home Page
The home page features a slideshow
	- Slideshow
	In the home page, we have a slideshow that features a preview of what customers can expect to find in our shop. After browsing through 
	the slideshow, they can click on the button to begin their shopping experience as it redirects them to the products page.


- Products Page
The products page features a collection of clothing items that our store offers, with a hover effect when the user hovers over the item,
an 'add to cart' button beside every item, and a cart checkout summary
	- Cart
	In the products page, we have a cart menu that shows a summary of all the items the user added to their cart, and allows 
	the user to modify the quantity of the item and whether or not they would like to remove the item from their cart entirely.
	It also displays the prices of each item and a total price of their cart. Once they want to finalise the purchase, the user
	can click on the 'PURCHASE' button and the site will confirm their order by alerting them with a message


- Login Page
The login page features 2 fields for the user to input: their email address and their password for the account they made.
The user is required to enter the appropriate login details for the account they made, or else an error alert will appear.
Once the user keys in the appropriate login details, they will receive a success alert and be redirected to the home page (might be laggy).
It also features a button that brings the user to the sign up page if they would like to sign up for a new account.


- Signup Page
The signup page features 4 fields for the user to input: email address, password, and confirmation for both.
The user is requried to enter a valid email address and the fields for the confirmation must match what they entered respectively.
If either one of these requirements are not met, an error message will appear and the account will not be created.
If the requirements are met and the user clicks sign up, an account will be made and their account details will be stored in our restdb database.
They will also receive a successful account creation alert.


- Contact Page
The contact page shows 4 cards that displays the following information:
Our outlet locations, social media links, email addresses, and hotlines. Users can click on the social media icons and be redirected to the
respective social media.

	- Feedback Form
	In the contact page, we have a feedback form that allows users to key in their name, email, subject and message, allowing them to
	send in anything they would like to ask/suggest. Users are required to key in a valid email address before the form submission goes through.
	When they submit the form successfully, a success alert will appear which confirms that all the details of their form has been sent to
	our restdb database and stored there.


- Features left to implement
	- Forgot password feature (Login Page)
	- Remember me feature (Login Page)
	- Filter feature to allow users to filter through different catogories of products(Shirts, Suits, Jackets, Pants, etc) (Products page)
	


3. Technologies used

- HTML, CSS, JavaScript, jQuery
- Bootstrap
- Google Fonts
- RestDB API



4. Testing

- Slideshow (Home Page)
1. Click on the arrows or the dots below the slideshow. It should bring you to a different page in the slideshow.
2. Click on the 'Start Shopping' button. It should bring you to the products page.

- Cart (Products Page)
1. Click on the 'Add to cart' button for any one of the products. It should that item to the cart and give it a quantity of 1
2. Click on the 'Add to cart' button for a product already in the cart. It should give an alert message saying that item
already exists in the cart.
3. Click either the up or down arrow in the quantity of the product inside the cart. The up arrow should increase the quantity
by 1 and the down arrow should decrease the quantity by 1.
4. The total amount in the cart should match the prices of all the items inside the cart.
5. Click on the purchase button in the cart. It should give an alert message saying the purchase is successful, reloading the page and
clearing the cart afterwards.

- Login Page
1. If you key in wrong account details for either the email or password fields and press login, it should give an alert message saying
the login details are incorrect.
2. If you key in the correct account details both the email and password fields and press login, it should give an alert message saying
the login details are correct and redirect you back to the home page.

- Signup page
1. If you key in an email address that is not valid (etc: does not contain '@' character) and submit, it should give an alert message
saying an incorrect email address was provided.
2. If you the re-enter the wrong values for the email or password and submit, it should give an alert message saying the email/passwords
fields are not matching.
3. If you key in a valid email address and the re-enter the email and password fields appropriately and submit, it should give an alert
message saying account successfully created.

- Feedback Form (Contact Page)
1. If you key in an email address that is not valid (etc: does not contain '@' character) and submit, it should give an alert message
saying an incorrect email address was provided.
2. If you key in an email address that is valid and all the other fields are filled up and submit, it should give an alert message printing
out the exact details of the form you entered, confirming the form submission went through successfully.



5. Credits

- Received inspiration for the slideshow in the homepage from this website: https://www.w3schools.com/howto/howto_js_slideshow.asp
- Received general design inspiration for our website from this video: https://www.youtube.com/watch?v=yQimoqo0-7g&t=1144s&ab_channel=EasyTutorials
- FontAwesome: https://kit.fontawesome.com/4419f2b644.js
- Bootstrap: https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css



6. Video Walkthrough
https://drive.google.com/file/d/1zZXoua2W1Gve4msXYKVxT1QsnsfyQkDQ/view?usp=sharing
