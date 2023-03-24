import React from 'react'
import Nav from './styled/Nav'
import Button from './styled/Button'
import Flex from './styled/Flex'
import Image from './styled/Image'

const Header = () => {
  return (
    <div>
        <Nav>
            <div>
                <img src="./images/logo.png" width={"300px"} alt="" />
            </div>
            <div>
                <Button color="#AF3A53">Apply Course</Button>
                <Button bg="#AF3A53">Talk to Anyone</Button>
            </div>
        </Nav>
        <div>
            <Flex>
                <div>
                    <h1> Lorem ipsum dolor, sit amet consectetur entore!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nam quo minima totam et neque, est vel natus delectus vero tenetur.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                         Iste, harum impedit. Cumque 
                         inventore modi harum eaque, rerum veniam nulla eum!</p>
                    <Button bg="#AF3A53"> Start your New Carier</Button>
                </div>
                <Image src='./images/hero.jpg'></Image>
            </Flex>
        </div>
    </div>
  )
}

export default Header