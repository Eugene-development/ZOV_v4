import { gql, request } from 'graphql-request';
import { Suspense } from 'react';

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

async function getCatalog () {
    const url = 'https://gost-remont.com/graphql/'
    const variables = {
		key: "1",
        slug: "doska-obreznaya-obrabotannaya-251006000"
	};
	const res = await request(url, ALL_CATALOG, variables);
    return res;
}

export default async function page() {
const catalog = await getCatalog();
// console.log(catalog)

  return (
	<Suspense fallback={
		<>	
		<p>Loading feed...</p><br/></>
	}>
    	<div>{catalog.product_one.value}</div>
    </Suspense>
  )
}
