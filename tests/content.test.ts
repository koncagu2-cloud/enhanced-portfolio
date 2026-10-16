import { test } from 'node:test';
import assert from 'node:assert/strict';
import { projectSchema } from '../src/lib/project-schema';

const evidence = {
  id: 'source-1', sourceReference: 'public/source', context: 'Test fixture only',
  sourceDate: 'unknown', creator: 'Test author', contribution: 'Test contribution',
  representation: 'original', verification: 'unverified', permission: 'pending', limitations: 'Test fixture',
};
const project = {
  title: 'Test fixture', order: 1, category: 'Test', provisionalSummary: 'Test fixture only',
  publicationStatus: 'review', workStatus: 'unverified', evidence: [evidence], claims: [],
};

test('review candidates can explicitly record unknown evidence without asserting outcomes', () => {
  assert.equal(projectSchema.safeParse(project).success, true);
});
test('a claim cannot reference a missing source', () => {
  assert.equal(projectSchema.safeParse({ ...project, claims: [{ text: 'Test', evidenceIds: ['missing'] }] }).success, false);
});
test('publication is blocked while work status is unverified or claims are absent', () => {
  assert.equal(projectSchema.safeParse({ ...project, publicationStatus: 'published' }).success, false);
});
test('pending, restricted, and unverified sources block publication of linked claims', () => {
  for (const overrides of [
    { verification: 'source-checked', permission: 'pending' },
    { verification: 'owner-confirmed', permission: 'restricted' },
    { verification: 'unverified', permission: 'approved' },
  ]) {
    assert.equal(projectSchema.safeParse({ ...project, workStatus: 'prototype', publicationStatus: 'published',
      evidence: [{ ...evidence, ...overrides }], claims: [{ text: 'Test', evidenceIds: ['source-1'] }],
    }).success, false);
  }
});
test('supported, cleared claims pass the structural gate without certifying truth', () => {
  assert.equal(projectSchema.safeParse({ ...project, workStatus: 'prototype', publicationStatus: 'published',
    evidence: [{ ...evidence, verification: 'owner-confirmed', permission: 'approved' }],
    claims: [{ text: 'Test', evidenceIds: ['source-1'] }],
  }).success, true);
});
test('duplicate evidence IDs are rejected', () => {
  assert.equal(projectSchema.safeParse({ ...project, evidence: [evidence, evidence] }).success, false);
});
