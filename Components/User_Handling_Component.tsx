"use client"

import React, { useRef, useState } from 'react'

function User_Handling_Component() {

    const User_ID_Get_Input_ref = useRef<HTMLInputElement>(null)
    const User_ID_Submit_Input_ref = useRef<HTMLInputElement>(null)
    const User_ID_Update_Input_ref = useRef<HTMLInputElement>(null)
    const User_Name_Input_ref = useRef<HTMLInputElement>(null)
    const User_Age_Input_ref = useRef<HTMLInputElement>(null)
    const User_Gender_Input_ref = useRef<HTMLInputElement>(null)
    const User_ID_Delete_Input_ref = useRef<HTMLInputElement>(null)
    const Name_Input_ref = useRef<HTMLInputElement>(null)
    const Age_Input_ref = useRef<HTMLInputElement>(null)

    const [isValidUpdateID, setIsValidUpdateID] = useState(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidAge, setIsValidAge] = useState(false);
    const [isValidGender, setIsValidGender] = useState(false);
    const [isValidGetID, setIsValidGetID] = useState(false);
    const [isValidDeleteID, setIsValidDeleteID] = useState(false);


    const handle_form_reset = ()=>{
            if((User_ID_Submit_Input_ref.current) && (Name_Input_ref.current) && (Age_Input_ref.current)){

                User_ID_Submit_Input_ref.current.value = '';
                Name_Input_ref.current.value = '';
                Age_Input_ref.current.value = '';
            }
        
        console.log("Form Reset");
    }

    const handle_get_All_Users = async ()=>{
        try {
            const response = await fetch(`https://crud-expressjs-backend-app.onrender.com/users/`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            const user = await response.json();
            console.log("✅ Fetched user:", user);
        } catch (error) {
                const err = error as Error;
            console.error("❌ Server or network error:", err.message || error);
        }
    }
    
    const handle_get_User = async (userId : string | number | undefined) => {
    try {
        const response = await fetch(`https://crud-expressjs-backend-app.onrender.com/users/${userId}`, {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error("User Was Not Found");
        }
        const user = await response.json();
        console.log("✅ Fetched user:", user);
    } catch (error) {
            const err = error as Error;
            console.error("❌ Server or network error:", err.message || error);
    }
    };        
    //          const id = User_ID_Get_Input_ref.current?.value?.trim();
    //         const Name = Name_Input_ref.current?.value?.trim();
    //         const Age = Age_Input_ref.current?.value?.trim();

    //         if (!id || !Name || !Age) {
    //             console.warn("⚠️ All fields are required");
    //             return;
    //         }

    //         const newUser = { id, Name, Age };
            
    //         try {
    //             const response = await fetch("https://crud-expressjs-backend-app.onrender.com/users", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify(newUser),
    //             });
            
    //             if (!response.ok) {
    //                 throw new Error("Failed to create user");
    //             }
            
    //             const result = await response.text();
    //             console.log("✅ User created:", result);
    //         } catch (error) {
    //             console.log("❌ Error");
    //         }
    //     };

    const handle_form_submit = async () => {
        const newUser = {
            id: User_ID_Submit_Input_ref.current?.value.trim(), // example ID
            Name: Name_Input_ref.current?.value.trim(),
            Age: Age_Input_ref.current?.value.trim(),
        };
        console.log(User_ID_Submit_Input_ref.current?.value)
        try {
            const response = await fetch("https://crud-expressjs-backend-app.onrender.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error("User Already Exists");
            }
            console.log("🧪 Current ID Input Value:", User_ID_Submit_Input_ref.current);
            console.log("🧪 ID Value:", User_ID_Submit_Input_ref.current?.value);

            const result = await response.text();
            console.log("✅ User created:", result);

        } catch (error) {
            const err = error as Error;
            console.error("❌ Server or network error:", err.message || error);
        }
    };

const handle_update_user = async (userId : string | number | undefined) => {
    const updatedUserData = {
        Name: User_Name_Input_ref.current?.value.trim(),
        Age: User_Age_Input_ref.current?.value.trim(),
        Gender: User_Gender_Input_ref.current?.value.trim(),
    };

    try {
        const response = await fetch(`https://crud-expressjs-backend-app.onrender.com/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUserData),
        });

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        const result = await response.text();
        console.log("✅ User updated:", result);
    } catch (error) {
        const err = error as Error;
        console.error("❌ Server or network error:", err.message || error);
    }
};


    const handle_delete_User = async (userId : string | number | undefined) => {
        try {
            const response = await fetch(`https://crud-expressjs-backend-app.onrender.com/users/${userId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("User Not Found");
            }

            const result = await response.text();
            console.log("✅ User deleted:", result);
        } catch (error) {
            const err = error as Error;
            console.error("❌ Server or network error:", err.message || error);
        }
    };
    const handle_delete_All_Users = async () => {
        try {
            const response = await fetch(`https://crud-expressjs-backend-app.onrender.com/users/`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("No Users Found To Delete");
            }

            const result = await response.text();
            console.log("✅ User deleted:", result);
        } catch (error) {
            const err = error as Error;
            console.error("❌ Server or network error:", err.message || error);
        }
    };


  return (
    <div><br /><br />
      <label style={{marginRight:"100px"}} htmlFor="ID_Input">ID</label>

      <input ref={User_ID_Submit_Input_ref} type="text" placeholder='Enter User ID' name='ID_Input' id='ID_Input'/><br /><br />
        {/* <input ref={User_ID_Get_Input_ref} type="text"  placeholder='Enter User ID'/> */}
      <label style={{marginRight:"100px"}} htmlFor="Name_Input">Name</label>
      <input ref={Name_Input_ref} type="text" placeholder='Enter User Name' name='Name_Input' id='Name_Input'/><br /><br />

      <label style={{marginRight:"100px"}} htmlFor="Age_Input">Age</label>
      <input ref={Age_Input_ref} type="text" placeholder='Enter User Age' name='Age_Input' id='Age_Input'/><br /><br />

      {/* <button onClick={handle_data_retreival} style={{marginRight:"100px"}} type="button">Get Users Data</button> */}
      <button onClick={handle_form_reset} style={{marginRight:"100px"}} type="button">Reset</button>
      <button onClick={handle_form_submit} type="button">Submit</button><br /><br /><br /><br /><br />
      
      <label style={{marginRight:"100px"}} htmlFor="User_ID_To_Be_Retrieved_Input">Get A Single User By ID</label>
      <input onChange={(e) => {const value = e.target.value.trim();
        // Allow only numeric IDs greater than 0
        setIsValidGetID(/^\d+$/.test(value));
        }}
        ref={User_ID_Get_Input_ref} type="text" placeholder='Enter User ID To Be Retrieved' name='User_ID_To_Be_Retrieved_Input' id='User_ID_To_Be_Retrieved_Input'/><br /><br />
      <button onClick={() => handle_get_User(User_ID_Get_Input_ref.current?.value)} disabled={!isValidGetID} style={{marginRight:"100px"}} type="button">Get A Single User</button>
      <button onClick={handle_get_All_Users} style={{marginRight:"100px"}} type="button">Get All Users</button><br /><br /><br /><br /><br />
      

      <label style={{marginRight:"100px"}} htmlFor="User_ID_To_Be_Updated_Input">Update A Single User By ID</label>
      <input onChange={(e) => {const value = e.target.value.trim();
        // Allow only numeric IDs greater than 0
        setIsValidUpdateID(/^\d+$/.test(value));
        }}
        ref={User_ID_Update_Input_ref} type="text" placeholder='Enter User ID To Be Updated' name='User_ID_To_Be_Updated_Input' id='User_ID_To_Be_Updated_Input'/><br /><br /><br /><br />
      
      <h2 style={{textAlign:"center"}}> The Data To Be Updated</h2><br /><br /><br />

    <label style={{marginRight:"100px"}} htmlFor="User_Name_To_Be_Updated_Input">Enter the new name</label>
    <input onChange={(e) => {const value = e.target.value.trim();
        // Allow  only alphabetical text
        setIsValidName(/^[a-zA-Z]+$/.test(value));
    }}
        ref={User_Name_Input_ref} type="text" placeholder='Enter User Name To Be Updated' name='User_Name_To_Be_Updated_Input' id='User_Name_To_Be_Updated_Input'/><br /><br />
    
    <label style={{marginRight:"100px"}} htmlFor="User_Age_To_Be_Updated_Input">Enter the new Age</label>
    <input onChange={(e) => {const value = e.target.value.trim();
        // Allow  only digits from 1 to 120
        const age = Number(value);
        setIsValidAge(age >= 1 && age <= 120 && Number.isInteger(age));
    }}
        ref={User_Age_Input_ref} type="text" placeholder='Enter User Age To Be Updated' name='User_Age_To_Be_Updated_Input' id='User_Age_To_Be_Updated_Input'/><br /><br />
    
    
    <label style={{marginRight:"100px"}} htmlFor="User_Gender_To_Be_Updated_Input">Enter the new Gender</label>
    <input onChange={(e) => {const value = e.target.value.trim();
        // Allow  only Male or Female
        const gender = value.trim().toLowerCase();
        setIsValidGender(gender === "male" || gender === "female");
        }}
        ref={User_Gender_Input_ref} type="text" placeholder='Enter User Gender To Be Updated' name='User_Gender_To_Be_Updated_Input' id='User_Gender_To_Be_Updated_Input'/><br /><br />

      <button onClick={() => handle_update_user(User_ID_Update_Input_ref.current?.value)} disabled={!isValidUpdateID || !isValidName || !isValidAge || !isValidGender} style={{marginRight:"100px"}} type="button">Update A Single User</button><br /><br /><br /><br />
      
      
      <label style={{marginRight:"100px"}} htmlFor="User_ID_To_Be_Deleted_Input">Delete A Single User By ID</label>
      <input onChange={(e) => {const value = e.target.value.trim();
        // Allow only numeric IDs greater than 0
        setIsValidDeleteID(/^\d+$/.test(value));
        }}
        ref={User_ID_Delete_Input_ref} type="text" placeholder='Enter User ID To Be Deleted' name='User_ID_To_Be_Deleted_Input' id='User_ID_To_Be_Deleted_Input'/><br /><br />
      <button onClick={() => handle_delete_User(User_ID_Delete_Input_ref.current?.value)} disabled={!isValidDeleteID} style={{marginRight:"100px"}} type="button">Delete A Single User</button>
      <button onClick={handle_delete_All_Users} style={{marginRight:"100px"}} type="button">Delete All Users</button>
    </div>
  )
}

export default User_Handling_Component
