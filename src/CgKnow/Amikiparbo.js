import React, { Component } from 'react'

export default class Amikiparbo extends Component {

constructor(props) {
  super(props)

  this.state = {
     changedValue:''
  }
}

handleOnChange=(e)=>{
  const id=e.target.value

  const url="https://usis.bracu.ac.bd/academia/docuJasper/index?studentId="+id+"&reportFormat=PDF&old_id_no="+id+"&strMessage=&scholarProgramMsg=&companyLogo=%2Fvar%2Facademia%2Fimage%2FuniversityLogo%2F1571986355.jpg&companyName=BRAC+University&headerTitle=GRADE+SHEET&companyAddress=66%2C+MOHAKHALI+C%2FA%2C+DHAKA+-+1212.&academicStanding=Satisfactory&gradeSheetBackground=%2Fbits%2Fusis%2Ftomcat%2Fwebapps%2Facademia%2Fimages%2FgradeSheetBackground.jpg&_format=PDF&_name=GRADE_SHEET_"+id+"_"+id+"&_file=student%2FrptStudentGradeSheetForStudent.jasper"
this.setState({
    changedValue:url
  })
}


  render() {  
    const handleClick=()=>{
    
      window.open(this.state.changedValue, '_blank', 'height=600px, width=600px');

    }
    
    return (
      <div>
      <h1>Enter your id:    </h1>
      <input type='text'onChange={this.handleOnChange}></input>
      
      <button onClick={()=> handleClick(this.state.changedValue)} >submit</button>

      

    </div>
    )
  }
}
