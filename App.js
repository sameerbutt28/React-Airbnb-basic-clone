import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Container1 from './component/container1';
import Container2 from './component/container2';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Container1/>
     <div className="contacts">
      <Container2
name="Mr. Whiskerson "
phone="(212) 555-1234"
email="mr.whiskaz@catnap.meow"     />
  <Container2 
name="Bawa Khatri"
phone="(212) 555-1234"
email="mr.whiskaz@catnap.meow"     />
<Container2 
name="Benu"
phone="(212) 555-1234"
email="mr.whiskaz@catnap.meow"     />
<Container2 
name="Godi"
phone="(212) 555-1234"
email="mr.whiskaz@catnap.meow"     />
<Container2 
name="Babu"
phone="(212) 555-1234"
email="mr.whiskaz@catnap.meow"     />
<Container2 
name="Sain"
phone="(212) 555-1234"
email="mr.whiskaz@catnap.meow"     />
<Container2 
name="Beela"
phone="(212) 555-1234"
email="mr.whiskaz@catnap.meow"     />
     </div>
     
  


    </div>
  );
}

export default App;
