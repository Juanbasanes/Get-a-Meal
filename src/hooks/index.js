// hooks/index.js

/** @format */

import api from "../api/api";
import { Server } from "../config/server";

export async function signup(email, password, name) {
  try {
    const result = await api.createAccount(email, password, name);
    return result;
  } catch (err) {
    console.error("ERROR", err);
    return "error";
  }
}

export async function login(email, password) {
  try {
    const result = await api.createSession(email, password);
    return result;
  } catch (err) {
    console.error("ERROR", err);
    return "error";
  }
}

export async function getAccount() {
  try {
    const result = await api.getAccount();
    return result;
  } catch (err) {
    console.error("ERROR", err);
    return "error";
  }
}

export async function getSession(sessionId) {
  try {
    const result = await api.getSession(sessionId);
    return result;
  } catch (err) {
    console.error("ERROR", err);
    return "error";
  }
}

export async function updatePreferences(preferences) {
  try {
    const result = await api.updatePreferences(preferences);
    return result;
  } catch (err) {
    console.error("ERROR", err);
    return "error";
  }
}

export async function logout() {
  try {
    const result = await api.deleteCurrentSession();
    return result;
  } catch (err) {
    console.error("ERROR", err);
    return "error";
  }
}

export async function fetchDonations() {
  try {
    const result = await api.listDocuments(Server.databaseID, Server.collectionID);
    return result.documents;
  } catch (err) {
    console.error("ERROR", err);
  }
}

export async function fetchOne(databaseId, collectionId, documentId) {
  try {
    const result = await api.getDocument(databaseId, collectionId, documentId);
    return result;
  } catch (err) {
    console.error("ERROR", err);
  }
}

export async function updateFavourite(documentId, data) {
  try {
    const result = await api.updateDocument(documentId, data);
    return result;
  } catch (err) {
    console.error("ERROR", err);
  }
}
