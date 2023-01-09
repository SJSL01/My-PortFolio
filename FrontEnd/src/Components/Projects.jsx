import "../Styles/Projects.css"

export default function Projects() {
     return (
          <div className="projects">
               <div className="project-card">
                    <div>TODO APP</div>
                    <img src="./todo.png" alt="" />
                    <div className="project-links">
                         <div onClick={() => { window.open("https://github.com/SJSL01/TODO-MERN", "_blank") }}>
                              Github
                         </div>
                         <div onClick={() => { window.open("https://long-pink-zebra-hose.cyclic.app/", "_blank") }}>
                              Website
                         </div>
                    </div>
               </div>
               <div className="project-card">
                    <div>LAUNDRY CART</div>
                    <img src="./laundry.png" alt="" />
                    <div className="project-links">
                         <div onClick={() => { window.open("https://github.com/SJSL01/Laundry-Cart-MERN", "_blank") }}>
                              Github
                         </div>
                         <div onClick={() => { window.open("https://laundry-cart-o2ud.onrender.com/", "_blank") }}>
                              Website
                         </div>
                    </div>
               </div>
               <div className="project-card">
                    1
               </div>
               <div className="project-card">
                    1
               </div>
               <div className="project-card">
                    1
               </div>
               <div className="project-card">
                    1
               </div>
          </div>
     )
}
