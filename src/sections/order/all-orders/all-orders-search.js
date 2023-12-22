import React, { useState } from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import {
  Card,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  TextField,
  Stack,
  MenuItem,
  Button,
} from '@mui/material';

export const AllOrdersSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStart, setSelectedStart] = useState('');
  const [selectedEnd, setSelectedEnd] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const starts = [
    "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A21", "A22", "A23", "A24", "A25", "A26", "A27", "A28", "A29", "A30", "A31", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A39", "A40", "A41", "A42", "A43", "A44", "A45", "A46", "A47", "A48", "A49", "A50", "A51", "A52", "A53", "A54", "A55", "A56", "A57", "A58", "A59", "A60", "A61", "A62", "A63",
  ]

  const ends = [
    "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9"
  ]

  const handleSearch = () => {
    onSearch({
      searchTerm,
      selectedStart,
      selectedEnd,
      selectedType,
      selectedStatus,
    });
  };

  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
        <OutlinedInput
          fullWidth
          placeholder="Nhập mã đơn hàng"
          startAdornment={(
            <InputAdornment position="start">
              <SvgIcon color="action" fontSize="small">
                <MagnifyingGlassIcon />
              </SvgIcon>
            </InputAdornment>
          )}
          sx={{ maxWidth: 500 }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <TextField
            select
            label="Điểm gửi hàng"
            value={selectedStart}
            onChange={(e) => setSelectedStart(e.target.value)}
            sx={{ minWidth: 145 }}
            SelectProps={{
              MenuProps: {
                style: { maxHeight: 250 },
              },
            }}
          >
            <MenuItem key="" value="">- Tất cả -</MenuItem>
            {starts.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))} 
          </TextField>
          <TextField
            select
            label="Điểm nhận hàng"
            value={selectedEnd}
            onChange={(e) => setSelectedEnd(e.target.value)}
            sx={{ minWidth: 155 }}
            SelectProps={{
              MenuProps: {
                style: { maxHeight: 250 },
              },
            }}
          >
            <MenuItem key="" value="">- Tất cả -</MenuItem>
            {ends.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))} 
          </TextField>
          <TextField
            select
            label="Loại hàng"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            sx={{ minWidth: 112 }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                },
              },
            }}
          >
            <MenuItem value="">- Tất cả -</MenuItem>
            <MenuItem value="goods">Hàng hóa</MenuItem>
            <MenuItem value="document">Tài liệu</MenuItem>
          </TextField>
          <TextField
            select
            label="Trạng thái"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            sx={{ minWidth: 114 }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                },
              },
            }}
          >
            <MenuItem value="">- Tất cả -</MenuItem>
            <MenuItem value="processing">Đang xử lý</MenuItem>
            <MenuItem value="transferring">Đang vận chuyển</MenuItem>
            <MenuItem value="shipping">Đang giao hàng</MenuItem>
            <MenuItem value="done">Đã hoàn thành</MenuItem>
            <MenuItem value="failed">Thất bại</MenuItem>
          </TextField>
          <Button variant="contained" onClick={handleSearch}
            sx={{ minWidth: 120 }}
          >
            Tìm kiếm
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};