import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../store/images';
import ImageListItem from './ImageListItem';
import './index.css' 

const ImageIndexPage = () => {
    const images = useSelector(state => Object.values(state.images));
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchImages())
    },[])

// console.log(images);
    const imageList = images.map(image => <ImageListItem image={image} key={image.id}/>)

    return ( 
        <div className="imageIndexPage">
            <ul className="imagesList">
                <img src="https://imstresst-dev.s3.us-east-1.amazonaws.com/Screen%20Shot%202022-10-12%20at%209.25.24%20AM.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCti0hoQTTf0EdIIOrEp7OFfF5S8cYSG0%2BVbY8wbVUAQgIhANwhjo7eFOQqcN40e6AG%2BZ69kKn9s8EZtjPwU6XEiRLhKu0CCIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTgxMjc1NTUzODM4Igy5Ddnpqc9WIviYpc4qwQJidm4XAcOA3CDy84AiO1w7XFg2fdkiSJ0F5Ql3GTUc3q5QmQlYvAleQM1pgkO5n%2FSS1OuWRLwcLAaAM1sGS%2BSzZHrHzpXWNW2YCdXgl8LfdoKdrTXdCyrMzDBSbZTmy8RDrJVODFNjElyByHrqZb2cde17SnTnSw0Hg%2BSkU%2Bmsup8BtDMKaNvoKg8Kt%2B%2BCTNuTm0ynQiFE34G9Yj9zuTDONb%2FXSZr5th6f75DsxgLxYYdvXhXKl2D6Z3Oa3EvbRISXcu%2BQN50jyh3mmh3vwMg%2BU3hycGR8ZusZCjg2chDmZU2okYqDJGg2r4MM%2BL6MHQNWMZ9xedeoLLcMvmIoqd5qVwMZiUFlaQpLinl6uy9qx%2FHz2krL7xUIeWc%2Fhu3RVfEU52p2Klt60DXuOiKLHhYszVK6hcAaWt%2BiRWzUUeFQG14wv9%2BYmgY6sgLu4nkoQtGm61CJoy8utdoi8yd7GDPfXeTnLMnjq6R1MXRszx%2B6AIz5BLBgC7VB%2FCljoNcMMjSWwYoJaiFGUIeHSyabwW4s6TuzwCrqQ9a7oEZHJ2HJsEOzIgfC%2FK7oWBNOcjg1X%2BlWu14%2BfVSY1ziJqZBZwalqxSTZGkq0grG%2FJqurVBoA0dBpCVGlCa11yCveBm%2FT1uUX%2BdxY3wZdQ1%2BgPLG%2F8RoITG3u3KxjG%2FMz5LUpDdO9tC28kTjkLjIfhX4lNjp46JULdL0BUGxnkDGE6pzZpaT66dGu%2B%2FDpnPYaWkZwm%2FgWSGM9VPmz46Lz3YzTopA25r4hhWHe7XWpy664GCDQzJ%2B6JBN8T5pMpOKNN4L8KfLg4dmLoI9bLEUuM%2Fz%2BnaGygvXFUkvLlSF6UkzvLqA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221012T134916Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYOVVZCAXLCIEMAN5%2F20221012%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b8337eb2c9312d0f5352f4b5df32bdb860f780c1517eaaa831e0bc47af169d32" alt="" />
                {imageList}
            </ul>

        </div>
     );
}
 
export default ImageIndexPage;