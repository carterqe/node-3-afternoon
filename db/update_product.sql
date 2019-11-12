UPDATE product
SET name = $1,
    description = $2,
    price = $3,
    image_url = $4
WHERE id = $5;

SELECT * FROM product
ORDER BY id;

