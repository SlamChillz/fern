// Generated by Fern. Do not edit.

package generatorexec

import (
	json "encoding/json"
	fmt "fmt"
)

type GithubPublishInfo struct {
	Type    string
	Npm     *NpmGithubPublishInfo
	Maven   *MavenGithubPublishInfo
	Postman *PostmanGithubPublishInfo
	Pypi    *PypiGithubPublishInfo
}

func (x *GithubPublishInfo) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	x.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "npm":
		value := new(NpmGithubPublishInfo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		x.Npm = value
	case "maven":
		value := new(MavenGithubPublishInfo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		x.Maven = value
	case "postman":
		value := new(PostmanGithubPublishInfo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		x.Postman = value
	case "pypi":
		value := new(PypiGithubPublishInfo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		x.Pypi = value
	}
	return nil
}

func (x GithubPublishInfo) MarshalJSON() ([]byte, error) {
	switch x.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", x.Type, x)
	case "npm":
		var marshaler = struct {
			Type string `json:"type"`
			*NpmGithubPublishInfo
		}{
			Type:                 x.Type,
			NpmGithubPublishInfo: x.Npm,
		}
		return json.Marshal(marshaler)
	case "maven":
		var marshaler = struct {
			Type string `json:"type"`
			*MavenGithubPublishInfo
		}{
			Type:                   x.Type,
			MavenGithubPublishInfo: x.Maven,
		}
		return json.Marshal(marshaler)
	case "postman":
		var marshaler = struct {
			Type string `json:"type"`
			*PostmanGithubPublishInfo
		}{
			Type:                     x.Type,
			PostmanGithubPublishInfo: x.Postman,
		}
		return json.Marshal(marshaler)
	case "pypi":
		var marshaler = struct {
			Type string `json:"type"`
			*PypiGithubPublishInfo
		}{
			Type:                  x.Type,
			PypiGithubPublishInfo: x.Pypi,
		}
		return json.Marshal(marshaler)
	}
}

type GithubPublishInfoVisitor interface {
	VisitNpm(*NpmGithubPublishInfo) error
	VisitMaven(*MavenGithubPublishInfo) error
	VisitPostman(*PostmanGithubPublishInfo) error
	VisitPypi(*PypiGithubPublishInfo) error
}

func (x *GithubPublishInfo) Accept(v GithubPublishInfoVisitor) error {
	switch x.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", x.Type, x)
	case "npm":
		return v.VisitNpm(x.Npm)
	case "maven":
		return v.VisitMaven(x.Maven)
	case "postman":
		return v.VisitPostman(x.Postman)
	case "pypi":
		return v.VisitPypi(x.Pypi)
	}
}
