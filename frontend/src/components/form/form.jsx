import React from 'react'
import './form.css'

const BlogForm = () => {
        return ( 
           
            <div>
                
               <div>
               <h2 style={{fontFamily:'Sofiya, sans-serif'}}>SELF ZONE</h2>
               </div>
                <div style={{fontFamily:'Lucida handwriting, cursive'}} >
                Blog Name: <input style={{height:'30px',width:'350px'}}
                        type="text"
                        required
                      placeholder='name'
                    />
                    </div>
                    <div style={{fontFamily:'Lucida handwriting, cursive'}}>
                Description:  <textarea style={{height:'200px',width:'350px'}}
                        required
                        placeholder='description'
                        
                    />
                    </div>
                    <div style={{fontFamily:'Lucida handwriting, cursive'}}>
            Blog author:  <input style={{height:'30px',width:'350px'}}
                         type='text'
                        placeholder='author'
                    ></input>
                     </div>
                     <div>
                    <button style={{height:'30px',width:'200px', borderRadius:'9px'}}>Submit</button>
                    </div>
                    </div>
           
         );
    }
    
export default BlogForm;