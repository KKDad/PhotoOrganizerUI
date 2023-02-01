#!/bin/bash

set +e

cp ../PhotoOrganizerAPI/docs/openapi.json openapi.json
rm -rf src/api
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/openapi.json \
    -g typescript-fetch \
    -o /local/src/api