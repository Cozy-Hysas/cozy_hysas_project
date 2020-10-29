import React from "react";



class HousesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                _id: 'abcde',
                title: 'This is Some Sample Data',
                imageUrl: 'https://source.unsplash.com/1600x900/?corgi',
                description: 'Apart from this first post, all of the posts in this set of sample data contain semi-pronouncable random gibberish.',
                price: 214
              },
              {
                _id: 'abcdf',
                title: 'Use This Data to Help You Build Your Client',
                imageUrl: 'https://source.unsplash.com/1600x900/?mountain,sunset',
                description: 'Bul gi addez mic abeahiza tilnor reja petiboca gu tetit wavvahigi mipcuf ben gizen vozin avojagu.',
                price: 501
              },
              {
                _id: 'abcdg',
                title: 'Then Replace It With Data Obtained from your Server and Database',
                imageUrl: 'https://source.unsplash.com/1600x900/?airplane',
                description: `Ebihalar ejo wemes tentewih awziv ocanerir sitbi bod jahfu dumtivub sucov om rapic hasgusbep hogtolfa beccuro usiro nepguup.`,
                price: 318
              },
              {
                _id: 'abcdh',
                title: 'You Won\'t BELIEVE What Happens Next',
                imageUrl: 'https://source.unsplash.com/1600x900/?guitar',
                description: `Wiebsa we ad jenubsu hamjes pulwa feh zeutgo vumpubsef sos is use fimeh as onbo.`,
                price: 479
              }]
        };
    }

    click(){
        alert('this should take me to house component')
    }


    render() {
        return (
            <div>
                {this.state.data.map((house,i) => {
                    return(
                    <div key={i}>
                        <h1 className="houseTitle" onClick={this.click.bind(this)}>{house.title}</h1>
                        <img src={house.imageUrl} onClick={this.click.bind(this)} className="houseimage" />
                        <span className="description">{house.description} </span>
                        <div className="price"><span className="housePrice">{house.price} </span> </div>
                    </div>
                )})}
            </div>
        )
    }
}


export default HousesList;