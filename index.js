let i = 0
do {
  i++
  console.log(i)
} while (i < 1000);

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthday: "Jan 5, 1925",
  gender: "female"

}

const objectKeys = (obj) => {
console.log(Object.keys(obj))
}

objectKeys(person)

const objectEntries = (obj) => {
  console.log(Object.entries(obj))
  }
  
  objectEntries(person)

  const arrayOfPersons = [
    {
      firstName: "Jane",
      lastName: "Doe",
      birthday: "Jan 5, 1925",
      gender: "female"
    
    },
    {
      firstName: "John",
      lastName: "Day",
      birthday: "Nov 25, 1988",
      gender: "male"
    
    },
    {
      firstName: "Michelle",
      lastName: "White",
      birthday: "Jan 19, 1975",
      gender: "female"
    
    },
    {
      firstName: "Rick",
      lastName: "Drew",
      birthday: "Feb 10, 2006",
      gender: "male"
    
    }

  ]

  const oddBirthYear = (arr) => {
    for (let person of arr){
      // console.log(person.birthday.split(", ")[1]%2)
      if(person.birthday.split(", ")[1]%2){
        console.log(person)
      }
    }
  }

  oddBirthYear(arrayOfPersons)

  arrayOfPersons.map((person) => {
    console.log(person)
  })

  const filteredList = arrayOfPersons.filter((person) =>{
    return person.gender == "male"
  })

  console.log("This is a list of males only", filteredList)

  const belowNinety = (person) => {
    console.log("This person is born before the ninities: ", person.birthday.split(", ")[1]< 1990)
  }

  belowNinety(arrayOfPersons[2])
  belowNinety(arrayOfPersons[3])

  const belowNinetyArr = arrayOfPersons.filter((person) => {
    return person.birthday.split(", ")[1]< 1990
  })

  console.log(belowNinetyArr)

  const d = new Date();
  let year = d.getFullYear();
  const twentyOneOlder = (person) => {
    if (year - person.birthday.split(", ")[1] >= 21){
      console.log(person.firstName + " is older than 21? " + true)
      return true
    } else {
      console.log(person.firstName + " is not older than 21. Their birth year is: " + person.birthday.split(', ')[1])
    }
  }

  twentyOneOlder(arrayOfPersons[2])
  twentyOneOlder(arrayOfPersons[3])


  const youngerThanTwentyOne = arrayOfPersons.filter((person) => {
    return year - person.birthday.split(", ")[1] <= 21
  })

  console.log(youngerThanTwentyOne)