const axios = require("axios");
const { response } = require("express");
const asyncHandler = require("../middleware/async");

exports.searchItemsModel = asyncHandler(async (req, res, next) => {
  console.log("enter");
  const { q } = req.query;
  let url = `${process.env.API_SEARH}?q=${q}`;
  axios({
    method: "get",
    url,
  })
    .then((response) => {
      console.log();
      res.status(200).json(formatData(response));
    })
    .catch((error) => {
      console.log(error);
    });
});

exports.searchForId = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  let idUrl = `${process.env.API_MERCADOLIBRE}${id}`;
  let descriptionUrl = `${process.env.API_MERCADOLIBRE}${id}/descriptions`;

  const requestId = axios.get(idUrl);
  const requestDescription = axios.get(descriptionUrl);

  axios
    .all([requestId, requestDescription])
    .then(
      axios.spread((...responses) => {
        const responseId = responses[0];
        const responseDescription = responses[1];
        res.status(200).json(formatDataDetail(responseId, responseDescription));
        console.log(responseId, responseDescription);
      })
    )
    .catch((errors) => {
      console.error(errors);
    });
});

searchAvailableFilter = (data) => data.id === "category";

formatData = ({ data }) => {
  console.log(data);
  const categoriesResult = data.available_filters.filter(
    (data) => data.id === "category"
  );
  let categoryNames = [];
  if (categoriesResult && categoriesResult.length > 0) {
    categoryNames = categoriesResult[0].values.map((item) => item.name);
  }

  //  console.log(categories && categories.ma)

  return {
    author: {
      name: "D@yron",
      lastname: "Acevedo",
    },
    categories: categoryNames,
    items: data.results.slice(0, 4).map((data) => maperDataItem(data, false)),
  };
};

formatDataDetail = (responseId, responseDescription) => {
 let description = "";

 if(responseDescription.data && responseDescription.data[0]){
    description = responseDescription.data[0].plain_text ;
 }

  return {
    author: {
      name: "D@yron",
      lastname: "Acevedo",
    },
    items: {
      ...maperDataItem(responseId.data, true),
      description,
    },
  };
};

maperDataItem = (dataItem, isDetail) => ({
  id: dataItem.id,
  title: dataItem.title,
  price: {
    currency: dataItem.currency_id,
    amount: Math.trunc(dataItem.price),
    decimals: Number(
      dataItem.price
        .toFixed(2)
        .replace(".", "")
        .replace(Math.trunc(dataItem.price), "")
    ),
  },
  picture: dataItem.thumbnail,
  condition: dataItem.condition,
  free_shipping: dataItem.shipping.free_shipping,
  ...(isDetail && { sold_quantity: dataItem.sold_quantity }),
});
