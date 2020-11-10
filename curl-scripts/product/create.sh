#!/bin/bash

API="http://localhost:4741"
URL_PATH="/products"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "product": {
      "name": "'"${NAME}"'",
      "expiration": "'"${EXPIRATION}"'",
      "isOrganic": "'"${ISORGANIC}"'",
      "quantity": "'"${QUANTITY}"'"
    }
  }'

echo

# PRODUCTNAME='Honey' EXPIRATION='2022-01-01' ISORGANIC='true'
# QUANTITY='5 gallons'
