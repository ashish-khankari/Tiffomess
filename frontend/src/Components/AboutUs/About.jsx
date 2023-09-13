import React from 'react'
import './About.css'
import { PiCubeFill } from 'react-icons/pi'
import { BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoYoutube } from 'react-icons/bi'
import Header from '../LandingPage/Header/Header'

const About = () => {
    return (
        <div className='AboutUs'>
            <Header/>
            <div className="AboutHeader">
                <p className='aboutTitle'>About Us</p>
                <p className='aboutText'>Experience The Flavors Of Home With Tiffome</p>
            </div>

            <div className="ourStory">
                <div className="storyTitle">Our Story</div>
                <div className="storyText">
                    At Tiffome, we are a team of passionate chefs and food enthusiasts dedicated to bringing the flavors of home to our customers. With a focus on fresh ingredients and authentic flavors, we strive to provide a range of Tiffin services that cater to all dietary needs.
                </div>
            </div>

            <div className="sect3">
                <div className="leftSection">
                    <div className="sections">
                        <div className="icon">
                            <PiCubeFill />
                        </div>
                        <div className="sec4Text">
                            <div className="title">
                                Convenient Delivery
                            </div>
                            <div className="text">
                                Enjoy delicious meals without leaving your home or office
                            </div>
                        </div>
                    </div>
                    <div className="sections">
                        <div className="icon">
                            <PiCubeFill />
                        </div>
                        <div className="sec4Text">
                            <div className="title">
                                Healthy Meals
                            </div>
                            <div className="text">
                                Savor our delicious and nutritious meals made with fresh ingredients
                            </div>
                        </div>
                    </div>
                    <div className="sections">
                        <div className="icon">
                            <PiCubeFill />
                        </div>
                        <div className="sec4Text">
                            <div className="title">
                                Convenient Plans

                            </div>
                            <div className="text">
                                Enjoy hassle-free and affordable monthly services.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightsection">
                    <img className='rightSectionImage' src="https://10web-site.ai/31/wp-content/uploads/sites/34/2023/07/inside-restaurant-topview-1_50jzw7pZ.webp" alt="" />
                </div>
            </div>

            <div className="ourSpecalities">
                <div className="info">
                    <div className="infoTitle">
                        <h1>Our Specalities</h1>
                    </div>

                    <div className="infoText">
                        <p>
                            At Tiffome, we specialize in providing fresh and healthy meals that cater to all dietary needs. Whether you’re looking for vegetarian, vegan, or gluten-free options, we have you covered. Our meals are bursting with authentic flavors and made with the freshest ingredients.
                        </p>
                    </div>

                    <div className="infoButton">
                        <button className="infoBtn">
                            View All Menu
                        </button>
                    </div>
                </div>

                <div className="specialRecipies">
                    <div className="recipie1">
                        <img className='recipeImages' src="https://10web-site.ai/31/wp-content/uploads/sites/34/2023/07/nyus-toasted-bread-with-grape_eSk6wvww.webp" alt="" srcset="" />

                        <h1>Chicken Biryani - $11.99</h1>

                        <p>
                            Aromatic basmati rice cooked with tender chicken and a blend of savory spices. Served with raita and a side of spicy chutney
                        </p>
                    </div>

                    <div className="recipie2">
                        <img className='recipeImages' src="https://10web-site.ai/31/wp-content/uploads/sites/34/2023/07/nyus-cheesy-fruits-cake_eSk6wvww.webp" alt="" srcset="" />

                        <h1>Palak Paneer - $9.99</h1>

                        <p>
                            A creamy and delicious vegetarian dish made with spinach and soft paneer, served with fragrant basmati rice and naan bread.
                        </p>
                    </div>
                </div>
            </div>

            <div className="meetTeam1">
                <p className='title'>
                    Meet The Tiffome Team
                </p>

                <p className="text">
                    Tiffome is a Tiffin delivery website dedicated to offering high-quality, home-cooked meals to our customers. With a focus on fresh ingredients and authentic flavors, we provide a range of Tiffin services, from single tiffins to monthly subscriptions. Our team of experienced chefs takes pride in crafting meals that are both healthy and delicious, with options for all dietary needs.
                </p>
            </div>

            <div className="meetTeam2">
                <div className="meetTeam2Images">
                    <img className='meetTeam2Img' src="https://10web-site.ai/31/wp-content/uploads/sites/34/2023/07/chef-2-otuak4tnz23trw4zutl07zkko9ny5yudgnxgb3kcs8_50jzw7pZ.webp" alt="" />
                    <p>Raghu Ram</p>
                    <div className="icons">
                        <BiLogoFacebookCircle />
                        <BiLogoLinkedinSquare />
                        <BiLogoYoutube />
                    </div>
                </div>
                <div className="meetTeam2Images">
                    <img className='meetTeam2Img' src="https://10web-site.ai/31/wp-content/uploads/sites/34/2023/07/chef-1-otuah2ujrfxa1ikqp01nm9bn66q05dps1jln5q3f08-1_50jzw7pZ.webp" alt="" />
                    <p>Nachiket Lele</p>
                    <div className="icons">
                        <BiLogoFacebookCircle />
                        <BiLogoLinkedinSquare />
                        <BiLogoYoutube />
                    </div>
                </div>
                <div className="meetTeam2Images">
                    <img className='meetTeam2Img' src="https://10web-site.ai/31/wp-content/uploads/sites/34/2023/07/chef-3-otuarqcp7ui9mf3ohltfvkjpje7rdw09i9rqymashk_50jzw7pZ.webp" alt="" />
                    <p>Shrikant Dehpande</p>
                    <div className="icons">
                        <BiLogoFacebookCircle />
                        <BiLogoLinkedinSquare />
                        <BiLogoYoutube />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About