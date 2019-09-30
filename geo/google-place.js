import { config as defaultConfig } from './config';
// require('isomorphic-fetch');

export class GooglePlaceApiClient {
  constructor(config = defaultConfig) {
    this.apiKey = config.apiKey;
    this.urlBase = 'https://maps.googleapis.com/maps/api/place';
  }

  async searchPlace(query) {
    const result = await fetch(
      `${this.urlBase}/autocomplete/json?input=${query}&key=${this.apiKey}`
    );
    if (!result.ok) {
      throw new Error(
        `Place autocomplete API returned error status ${
          result.status
        }. Error: ${await result.text()}`
      );
    }

    const parsed = await result.json();
    const { predictions = [] } = parsed;

    return predictions.map(p => ({
      name: p.description,
      id: p.place_id,
      metadata: p.types,
    }));
  }

  async getPlaceById(id, placePartial = {}) {
    const result = await fetch(
      `${this.urlBase}/details/json?place_id=${id}&key=${this.apiKey}`
    );
    if (!result.ok) {
      throw new Error(
        `Place get place details API returned error status ${
          result.status
        }. Error: ${await result.text()}`
      );
    }

    const parsed = await result.json();
    const { result: parsedResult } = parsed;

    return Object.assign({}, placePartial, {
      location: (parsedResult.geometry && parsedResult.geometry.location) || {},
    });
  }
}
