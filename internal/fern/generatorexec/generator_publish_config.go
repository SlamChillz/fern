// Generated by Fern. Do not edit.

package generatorexec

type GeneratorPublishConfig struct {
	// Deprecated, use publishTargets instead.
	Registries *GeneratorRegistriesConfig `json:"registries"`
	// Deprecated, use publishTargets instead.
	RegistriesV2  *GeneratorRegistriesConfigV2 `json:"registriesV2"`
	PublishTarget *GeneratorPublishTarget      `json:"publishTarget"`
	Version       string                       `json:"version"`
}
