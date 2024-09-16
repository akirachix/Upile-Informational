import React from 'react';
import { CiCalendar } from "react-icons/ci";
import { LiaFemaleSolid, LiaMaleSolid } from "react-icons/lia";

const PersonCard = ({ name, location, image, age, gender }:{name:string, location:string, image:string, age:number, gender:string}) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-[#662113] border-2 w-full h-96 max-w-xs mx-auto xl:h-[380px] 2xl:h-88">
    <img src={image} alt={name} className="w-full h-56 object-cover" />
    <div className="p-4">
      <h3 className="font-bold mt-2 mb-2 text-[24px] lg:text[18px] xl:text-[18px]">{name}</h3>
      <p className="text-[16px] mb-2">{location}</p>
      <div className="flex mt-2 items-center">
        <div>
          <CiCalendar className='text-[8px] p-2 w-8 h-8 text-white rounded-full mr-1 bg-[#662113]' />
        </div>
        <span className="text-[16px] mr-10 xl:mr-1 2xl:mr-10 lg:mr-1 lg:text-[14px]">{age} yrs</span>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#662113]">
          {gender === 'Female' ? (
            <LiaFemaleSolid className='text-[20px] text-white' />
          ) : (
            <LiaMaleSolid className='text-[20px] text-white' />
          )}
        </div>
        <span className="text-[16px] ml-2">{gender}</span>
      </div>
    </div>
  </div>
);

const Updates = () => {
  const people = [
    {
      name: "Nataly Wambui",
      location: "Nyahururu, Kiambu",
      image: "./media/Nataly.png",
      age: 55,
      gender: "Female",
    },
    {
      name: "Esther Shiamagovi",
      location: "Nairobi, Kenya",
      image: "./media/Shiamagovi.jpg",
      age: 40,
      gender: "Female",
    },
    {
      name: "Sharon Njunge",
      location: "Mombasa, Kenya",
      image: "./media/Sharon.jpg",
      age: 32,
      gender: "Female",
    },
    {
      name: "Hannah Unyolo",
      location: "Kisumu, Kenya",
      image: "./media/Hannah.jpg",
      age: 28,
      gender: "Female",
    },
    {
      name: "Faith Mutava",
      location: "Eldoret, Kenya",
      image: "./media/Mutava.jpg",
      age: 45,
      gender: "Female",
    },
  ];

  return (
    <div className="bg-white px-6 sm:px-6 lg:px-8">
      <div className="mb-12">
      <h2 className="text-[#662113] font-bold text-center mt-4 mb-8 text-[28px] md:text-[36px] lg:text-[36px] 2xl:text-[40px]">Current Updates</h2>        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-5 gap-8">
          {people.map((person, index) => (
            <PersonCard
              key={index}
              name={person.name}
              location={person.location}
              image={person.image}
              age={person.age}
              gender={person.gender}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;