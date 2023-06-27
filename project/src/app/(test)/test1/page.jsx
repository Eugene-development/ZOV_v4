import { gql, request } from 'graphql-request';
import { Suspense } from 'react';
export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = 60;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';


const ALL_CATALOG = gql`
	query product ($slug: String!, $key: String!) {
		product_one(slug: $slug, key: $key) {
			id
			value
			price {
				value
			}
			unit {
				value
			}
			text {
				value
			}
			image {
				hash
				alt
			}
			parent: parentable {
				... on Category {
					value
					slug
				}
			}
		}
	}
`;




function getCatalog () {
    const url = process.env.NEXT_PUBLIC_GRAPHQL
    const variables = {
		key: "1",
        slug: "doska-obreznaya-obrabotannaya-251006000"
	};
	return request(url, ALL_CATALOG, variables);
}


export default async function page() {
const catalog = await getCatalog();

// console.log(catalog)

  return (
	<Suspense fallback={
		<p>Loading feed...</p>
	}>
    	<div>{catalog.product_one.value}</div>
    </Suspense>
  )
}


