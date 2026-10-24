import assert from 'node:assert/strict';
import { listAIProfileChoices, resolveBundledAIProfile } from '@x12i/ai-profiles';
const choices = await listAIProfileChoices({ source: 'bundled' });
assert(choices.length > 0);
const choice = choices[0];
const resolved = resolveBundledAIProfile(choice.key, { catalogLane: choice.catalogLane });
assert.equal(resolved.profile, choice.profile);
assert.equal(resolved.choice, choice.choice);
assert(resolved.modelId.endsWith(choice.modelId));
console.log({ choice: choice.key, registryModel: choice.modelId, registryProvider: choice.provider,
  resolvedModel: resolved.modelId, resolvedProvider: resolved.provider, routing: resolved.routing });
// Routing may add the vendor namespace and select OpenRouter for the same registry choice.
// The bundled catalog is the pinned package snapshot; it does not prove current provider availability.
