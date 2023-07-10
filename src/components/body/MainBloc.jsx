import MainBlocText from "./MainBlocText"
import Buttons from "./Buttons"

export default function MainBloc({ sectionRefList }) {
    return (
        <div className="main-bloc">
            <MainBlocText />
            <Buttons sectionRefList={sectionRefList}/>
        </div>
    )
}