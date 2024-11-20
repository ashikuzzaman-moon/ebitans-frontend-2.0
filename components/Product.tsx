import { DEFAULT } from '@/consts';
import { all_products } from '@/utils/dynamic-import/product/product';

import { useSelector } from 'react-redux';

const Product = ({ store_id, design }: any) => {
    const ProductComponent =
        all_products[design?.product] || all_products[DEFAULT];

    const categoryStore = useSelector((state: any) => state?.category);
    const products = useSelector((state: any) => state?.products);
    const home = useSelector((state: any) => state?.home);

    const category = categoryStore?.category || [];
    const headersetting = home?.header || [];

    const product = products?.product || [];
    const best_sell_product = products?.bestSellProduct || [];
    const feature_product = products?.featureProduct || [];

    return (
        <>
            {ProductComponent ? (
                <>
                    {category.length > 0 && (
                        <ProductComponent
                            design={design}
                            store_id={store_id}
                            product={product}
                            category={category}
                            categoryId={category?.[0]?.id}
                            best_sell_product={best_sell_product}
                            feature_product={feature_product}
                            headersetting={headersetting}
                        />
                    )}
                </>
            ) : (
                <p>Product not found</p>
            )}
        </>
    );
};

export default Product;

{
    /* {theme === "default" && <DynamicDefaultProduct product={product} />} */
}
{
    /* {theme === "one" && (
    <ProductOne
      product={product}
      best_seller_product={best_sell_product}
      feature_product={feature_product}
      store_id={store_id}
      design={design}
    />
  )}
  {theme === "two" && (
    <ProductTwo
      category={category}
      product={product}
      best_seller_product={best_sell_product}
      feature_product={feature_product}
      store_id={store_id}
      design={design}
    />
  )}
  {theme === "three" && (
    <ProductThree store_id={store_id} design={design} product={product} />
  )}
  {theme === "four" && (
    <ProductFour store_id={store_id} design={design} product={product} />
  )}
  {theme === "five" && (
    <ProductFive store_id={store_id} design={design} product={product} />
  )} */
}
{
    /* {theme === "seven" && (
    <ProductTwenty category={category} design={design} />
  )} */
}
{
    /* {theme === "ten" && (
    <ProductFive store_id={store_id} design={design} product={product} />
  )}
  {theme === "eleven" && (
    <DynamicProductEleven
      product={product}
      design={design}
      best_sell_product={best_sell_product}
      feature_product={feature_product}
    />
  )}
  {theme === "fourteen" && (
    <ProductFourteen
      category={category}
      design={design}
      store_id={store_id}
    />
  )}
  {theme === SIXTEEN && (
    <ProductSixteen product={product} design={design} store_id={store_id} />
  )}
  {theme === SEVENTEEN && (
    <ProductSeventeen
      product={product}
      design={design}
      store_id={store_id}
      category={category}
    />
  )}
  {theme === NINETEEN && (
    <ProductNineteen product={product} store_id={store_id} />
  )}
  {theme === TWENTY && (
    <ProductTwenty product={product} category={category} design={design} />
  )}
  {theme === "twentyone" && (
    <ProductTwentyOne
      design={design}
      store_id={store_id}
      headerSetting={headerSetting}
      product={product}
      category={category}
    />
  )}
  {theme === "twentyfour" && (
    <ProductTwentyFour
      design={design}
      store_id={store_id}
      headerSetting={headerSetting}
      product={product}
      category={category}
    />
  )}
  {theme === "twentysix" && (
    <ProductTwentySix
      design={design}
      store_id={store_id}
      category={category}
    />
  )}
  {theme === "twentyseven" && (
    <ProductTwentySeven
      category={category}
      design={design}
      store_id={store_id}
    />
  )}
  {theme === "twentyeight" && (
    <ProductTwentyEight
      product={product}
      design={design}
      store_id={store_id}
      category={category}
    />
  )}

  {theme === "twentynine" && (
    <ProductTwentyNine
      category={category}
      design={design}
      store_id={store_id}
    />
  )}
  {theme === THIRTY && (
    <ProductThirty
      category={category}
      design={design}
      store_id={store_id}
    />
  )}
  {theme === "thirtyone" && (
    <ProductThirty
      category={category}
      design={design}
      store_id={store_id}
    />
  )}
  {theme === "thirtythree" && (
    <DynamicProductThirtyThree
      product={product}
      design={design}
      best_sell_product={best_sell_product}
      feature_product={feature_product}
    />
  )}
  {theme === "thirtyfour" && (
    <ProductThirtyFour
      product={product}
      design={design}
      store_id={store_id}
    />
  )}
  {theme === "thirtyfive" && (
    <ProductThirtyFive
      product={product}
      design={design}
      store_id={store_id}
    />
  )}
  {theme === "thirtysix" && (
    <ProductThirtySix
      design={design}
      store_id={store_id}
      product={product}
    />
  )}
  {theme === "thirtyseven" && (
    <ProductThirtySeven
      design={design}
      store_id={store_id}
      product={product}
    />
  )}
  {theme === "thirtyeight" && (
    <ProductThirtyEight
      category={category}
      design={design}
      store_id={store_id}
    />
  )}
  {theme === "thirtynine" && (
    <ProductThirtyNine
      category={category}
      design={design}
      store_id={store_id}
    />
  )} */
}
