import Banner from "../Shared/Banner";
import newslatter from '../assets/newslatter.png'

const Newslatter =  () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            <Banner banner={newslatter} 
            heading={"Each student an share their discount code for friends"} 
            subheading={"A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"}
            btn1={"I have a code"} btn2={""}/>
        </div>
    )
}

export default Newslatter;