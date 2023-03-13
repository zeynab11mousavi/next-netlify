const Catalogue = () => {
  return (
    <div className="ml-6 md:ml-[25%] md:mt-36">
      <div className="catalogueImgLoader"></div>

      <div className="catalogueContainer">
        <h1 className="catalogueTitle">AHT CATALOGUE</h1>

        <div className="catalogueBook">
          <div className="catalogueBook-gap"></div>
          <div className="catalogueBook-cataloguePages">
            <div className="catalogueBook-cataloguePages-page"></div>
            <div className="catalogueBook-cataloguePages-page"></div>
            <div className="catalogueBook-cataloguePages-page"></div>
            <div className="catalogueBook-cataloguePages-page"></div>
            <div className="catalogueBook-cataloguePages-page"></div>
            <div className="catalogueBook-cataloguePages-page"></div>
          </div>
          <div className="catalogueFlips">
            <div className="catalogueFlip catalogueFlip1">
              <div className="catalogueFlip catalogueFlip2">
                <div className="catalogueFlip catalogueFlip3">
                  <div className="catalogueFlip catalogueFlip4">
                    <div className="catalogueFlip catalogueFlip5">
                      <div className="catalogueFlip catalogueFlip6">
                        <div className="catalogueFlip catalogueFlip7"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
