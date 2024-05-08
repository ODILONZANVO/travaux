import Caracteristique from "../component/Caracteristique";
import Contact from "../component/Contact";
import Dossier from "../component/Dossier";
import Titre from "../component/Titre";




export function Page(){
    return(
        <div>
            <p>
             <Titre/>   
            <Caracteristique/>
            <Contact/>
            <Dossier/>        
            </p>
        </div>
    )
}export default Page;

