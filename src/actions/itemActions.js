import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  try {
    const response = await axios.get('/api/v1/items');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addItemAsync = createAsyncThunk('items/addItem', async (newItem, thunkAPI) => {
  try {
    const response = await axios.post('/api/v1/items', newItem);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const removeItemAsync = createAsyncThunk('items/removeItem', async (itemId, thunkAPI) => {
  try {
    await axios.delete(`/api/v1/items/${itemId}`);
    return itemId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
