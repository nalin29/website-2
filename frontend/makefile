start:
	npm run start
build:
	npm run build
clean:
	rm -r build
deploy: build
	aws s3 mv --recursive s3://rest-website/build s3://rest-website/build-old
	aws s3 cp --recursive build s3://rest-website/build
	aws s3 rm s3://rest-website/build-old/ --recursive
	aws cloudfront create-invalidation --distribution-id EESUJEV0BF19J --paths "/*"

