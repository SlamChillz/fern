// This file was auto-generated by Fern from our API Definition.

package service

import (
	context "context"
	seedgo "github.com/fern-api/seed-go"
	core "github.com/fern-api/seed-go/core"
	http "net/http"
)

type Client struct {
	baseURL    string
	httpClient core.HTTPClient
	header     http.Header
}

func NewClient(opts ...core.ClientOption) *Client {
	options := core.NewClientOptions()
	for _, opt := range opts {
		opt(options)
	}
	return &Client{
		baseURL:    options.BaseURL,
		httpClient: options.HTTPClient,
		header:     options.ToHeader(),
	}
}

func (c *Client) GetMovie(ctx context.Context, request string) (*seedgo.Movie, error) {
	baseURL := ""
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	endpointURL := baseURL + "/" + "movie"

	var response *seedgo.Response
	if err := core.DoRequest(
		ctx,
		c.httpClient,
		endpointURL,
		http.MethodPost,
		request,
		&response,
		false,
		c.header,
		nil,
	); err != nil {
		return nil, err
	}
	return response.Data, nil
}

func (c *Client) GetMovieDocs(ctx context.Context, request string) (string, error) {
	baseURL := ""
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	endpointURL := baseURL + "/" + "movie"

	var response *seedgo.Response
	if err := core.DoRequest(
		ctx,
		c.httpClient,
		endpointURL,
		http.MethodPost,
		request,
		&response,
		false,
		c.header,
		nil,
	); err != nil {
		return "", err
	}
	return response.Docs, nil
}
