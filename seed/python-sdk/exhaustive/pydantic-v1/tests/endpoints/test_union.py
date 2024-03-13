# This file was auto-generated by Fern from our API Definition.

from seed.client import AsyncSeedExhaustive, SeedExhaustive
from seed.resources.types import Animal_Dog

from ..utilities import validate_response


async def test_get_and_return_union(client: SeedExhaustive, async_client: AsyncSeedExhaustive) -> None:
    expected_response = {"animal": "dog"}
    response = client.endpoints.union.get_and_return_union(
        request=Animal_Dog(animal="dog", name="string", likes_to_woof=True)
    )
    validate_response(response, expected_response)

    async_response = await async_client.endpoints.union.get_and_return_union(
        request=Animal_Dog(animal="dog", name="string", likes_to_woof=True)
    )
    validate_response(async_response, expected_response)