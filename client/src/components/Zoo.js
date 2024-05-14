import React, {useState} from "react";
import zoo from '../images/zoo.png'

export const Zoo = () => {

    // Small data base of animals 
    const nameFromDatabase = [
        {id: 1, username: 'Elephant'},
        {id: 2, username: 'Leopord'},
        {id: 3, username: 'Lion'},
        {id: 4, username: 'Gorillas'},
        {id: 5, username: 'Giraffe'},
        {id: 6, username: 'Cheetah'},
        {id: 7, username: 'Meerkat'},
        {id: 8, username: 'African Elephant'},
        {id: 9, username: 'Zebra'},
        {id: 10, username: 'Mongoose'},
        {id: 11, username: 'Monkey'},
        {id: 12, username: 'Chimpanzee'},
        {id: 13, username: 'Rhinoceeros'},
        {id: 14, username: 'Crocodiles'},
    ]

    const [names, setNames] = useState(nameFromDatabase)

    const filterNames = e => {
        // Change input to all toLowerCase 
        const search = e.target.value.toLowerCase()
        const filterNames = nameFromDatabase.filter(names => names.username.toLowerCase().includes(search))
        setNames (filterNames)
    }

    return (
        <div>
            {/* The text that will be displayed at the top of the page  */}
            <div className="Text">
                <h2>Zoo</h2>
                <p>Welcome to Wild Explorers Safari Zoo, where adventure and education collide! Embark on a journey like no other as your school or club steps into the heart of the wilderness right in the heart of our safari park. Our dedicated team of expert tour guides will accompany you every step of the way, leading you through lush landscapes teeming with exotic wildlife. As you roam our expansive grounds, your guide will regale you with fascinating tales of the animals that call our park home, from majestic lions to playful meerkats. Have burning questions about conservation or animal behavior? Our guides are here to provide insightful answers and spark curiosity in young minds. But the adventure doesn't end there! Upon arrival, each student will receive a specially crafted worksheet designed to enhance their learning experience. These worksheets cover a range of topics, from animal habitats to endangered species, allowing students to engage with the material in a hands-on and interactive way. At Wild Explorers Safari Zoo, we believe that learning should be as thrilling as it is educational. Join us for an unforgettable journey where discovery awaits around every corner.</p>
            </div>

            {/* Search filter  */}
            <div className="text-center">
                <header className="search_header">
                    <h2>Animals</h2>
                    <input type="text" onChange={(e) => filterNames (e)} />
                    {/* Get rid of bullt points  */}
                    <ul className="no-bullets">
                        {/* iterates throught the list */}
                        {names.map(name => {
                            return <li key={name.id}>{name.username}</li>
                        })}
                    </ul>
                </header>

                {/* Images that will be displayed on the page  */}
                <div className="zoo_img">
                    <img src={zoo} className="zoo_zoo" alt="zoo"/>
                </div>
            </div>
        </div>
    )
}

